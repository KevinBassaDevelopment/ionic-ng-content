# ionic-ng-content
Example project to display the behaviour of ng-content in ionic.

Related ticket: https://github.com/ionic-team/ionic/issues/21597


**How to setup:**
1) clone + npm i
2) npm run start
3) browse localhost:4200


**What you can see there:**
-A very basic page that is using a generic wrapper component for ion-header/content

-This results in content size being wrongly calculated

-By pressing the button in the ion-header, the class 'ion-page' is added to the wrapper, which fixes this behaviour
