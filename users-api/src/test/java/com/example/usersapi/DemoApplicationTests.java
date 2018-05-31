package com.example.usersapi;

import com.example.usersapi.models.User;
import com.example.usersapi.repositories.UserRepository;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.stream.Stream;

import static com.codeborne.selenide.Selenide.open;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class DemoApplicationTests {

	@Autowired
	private UserRepository userRepository;

	@Before
	public void setUp() {
		userRepository.deleteAll();

		User firstUser = new User("fName1","lName1","uName1","pass1");
		User secondUser = new User("fName2","lName2","uName2","pass2");

		Stream.of(firstUser, secondUser)
				.forEach(user -> {
					userRepository.save(user);
				});

		System.setProperty("selenide.browser", "Chrome");
		System.setProperty("selenide.headless", "false");

		// Visit the UI in a browser
		open("http://localhost:4200");
	}

	@After
	public void tearDown() {
		userRepository.deleteAll();
	}

	@Test
	public void contextLoads() {
	}

}
