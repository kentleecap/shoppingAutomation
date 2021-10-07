<p><strong>To execute</strong>
    <br />npx wdio run ./wdio.conf.ts</p>
<p><strong>To Generate Report</strong><br />allure generate allure-results &ndash;clean<br />allure open</p>
<p><br />Cucumber steps Reference at login.feature</p>
<p><strong>Feature</strong>: Shopping at automationpractice.com<br /><strong>Scenario Outline</strong>: As new user, I registered with new email and continue for shopping all the way till payment.<br />Given I am on the login page<br />Then I click on signIn link<br />Then I start to create email account with &lt;email&gt;<br />Then I enter firstname with &lt;firstname&gt; and last name with &lt;lastname&gt;<br />Then I enter address with &lt;address&gt; and city with &lt;city&gt; and poscode with &lt;postcode&gt;<br />Then I click on Register button<br />Then I check my firstname &lt;firstname&gt; and lastname &lt;lastname&gt; match<br />Then I click on Sign Out<br />Then I click on Log In<br />Then I enter email with &lt;email&gt; and password with &lt;password&gt;<br />Then I start to order product name by search &lt;productname&gt;<br />Then I add product to cart<br />Then I start to order selected product<br />Then I start to confirm the address details<br />Then I start to confirm the delivery details<br />Then I select payment wire<br />Then I select final confirmation<br />Then I click on Sign Out</p>
<p><strong>Examples</strong>:<br /><strong>| email | firstname | lastname | address | postcode | city | mobile | productname |password |</strong><br />| random | some | ham | 1 carbeen dr | 67109 | kansas | 0432381123 | BLOUSE |Test@123 |<br /><br /><strong>Scenario Outline</strong>: As a return user, I Login and start to place an order in my shopping<br />Given I am on the login page<br />Then I click on Log In<br />Then I enter email with &lt;email&gt; and password with &lt;password&gt;<br />Then I start to order product name by search &lt;productname&gt;<br />Then I add product to cart<br />Then I start to order selected product<br />Then I start to confirm the address details<br />Then I start to confirm the delivery details<br />Then I select payment wire<br />Then I select final confirmation<br />Then I click on Sign Out</p>
<p><strong>Examples</strong>:<br /><strong>| email | productname |password |</strong><br />| mytestE6@yaho.com | BLOUSE |Test@123 |<br />| mytestE7@yaho.com | BLOUSE |Test@123 |<br /><br /></p>
