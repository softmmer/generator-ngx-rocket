/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

import { browser, element, by } from 'protractor';

export class AppPage {
<% if (props.auth) { -%>
<%   if (props.ui === 'ionic') { -%>
  usernameField = element(by.css('ion-input[formControlName="username"]'));
  passwordField = element(by.css('ion-input[formControlName="password"]'));
  loginButton = element(by.css('ion-button[type="submit"]'));
<%   } else { -%>
  usernameField = element(by.css('input[formControlName="username"]'));
  passwordField = element(by.css('input[formControlName="password"]'));
  loginButton = element(by.css('button[type="submit"]'));
<%   } -%>

<% } -%>
  constructor() {
    // Forces default language
    this.navigateTo();
    browser.executeScript(() => localStorage.setItem('language', 'en-US'));
  }

  navigateTo() {
    return browser.get('/');
  }

<% if (props.auth) { -%>
  login() {
    this.usernameField.sendKeys('test');
    this.passwordField.sendKeys('123');
    this.loginButton.click();
<% if (props.ui === 'ionic') { -%>
    browser.sleep(5000);
<% } -%>
  }

<% } -%>
  getParagraphText() {
<% if (props.ui === 'ionic') { -%>
    return element(by.css('app-root ion-card-title')).getText();
<% } else if (props.ui === 'material') { -%>
    return element(by.css('app-root mat-card-title')).getText();
<% } else { -%>
    return element(by.css('app-root h1')).getText();
<% } -%>
  }
}
