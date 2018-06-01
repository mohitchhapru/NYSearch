package com.example.usersapi;

import com.codeborne.selenide.CollectionCondition;
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

import static com.codeborne.selenide.Condition.exist;
import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;
import static com.codeborne.selenide.Selenide.open;
import static java.time.zone.ZoneRulesProvider.refresh;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class DemoApplicationTests {
	User firstUser;
	User secondUser;

	@Autowired
	private UserRepository userRepository;

	@Before
	public void setUp() {
		userRepository.deleteAll();

		firstUser = new User("fName1","lName1","uName1","pass1");
		secondUser = new User("fName2","lName2","uName2","pass2");

		Stream.of(firstUser, secondUser)
				.forEach(user -> {
					userRepository.save(user);
				});

		System.setProperty("selenide.browser", "Chrome");
		System.setProperty("selenide.headless", "false");

		open("http://localhost:4200");		// Visit the UI in a browser
	}

	@After
	public void tearDown() {
		userRepository.deleteAll();
	}

	@Test
	public void v1testUserCount() throws Exception {
		$("#navAdminView").click();
		$$("[data-user-display]").shouldHave(CollectionCondition.size(2));
	}

	@Test
	public void v2testAddaUser() throws Exception {
		long secondUserId = secondUser.getId();

		$("#btnSignUp").click();
		$("#pwd-container").should(exist);

		$("#first-name-input").sendKeys("fName3");				// Add a new user
		$("#last-name-input").sendKeys("lName3");
		$("#user-name-input").sendKeys("uName3");
		$("#password-input").sendKeys("pass3");
		$("#add-user").click();

		$("#navAdminView").click();
		$$("[data-user-display]").shouldHave(CollectionCondition.size(3));
		refresh();
		$("#navAdminView").click();
		$$("[data-user-display]").shouldHave(CollectionCondition.size(3));   	// verify after refresh
	}


}