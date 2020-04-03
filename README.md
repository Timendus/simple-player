# Simple player

Really simple example for how to set up a website that just plays the latest
video from your YouTube channel, filling up the entire browser window.

Useful for all of those cases where explaining *the whole of YouTube* is just a
little too much for your audience 😉

## Step 1: Clone

Fork this repository in your own Github account (button on the top right of this
page).

## Step 2: Configure

Open the `index.js` file (click on the file, then on the little pen icon top
right) and edit this bit:

```javascript
/** CONFIG **/

var title      = "Timendus' latest video";
var channel_id = "Timendus";
var domain     = "timendus.github.io";
```

`title` can be whatever you want to show in the browser tab.

`channel_id` should be the bit after `https://www.youtube.com/user/` in the
browser URL bar when you visit your channel page.

`domain` should be the domain you host this page on. If you host it on Github
pages, as per this instruction, then change it it `<your username>.github.io`.

Commit your changes to the master branch.

## Step 3: Hosting

Configure [Github Pages](https://pages.github.com/) for your repository: Go to
the **Settings** tab and scroll down to the **GitHub Pages** section. Then
select the **master branch** source and click on the **Save** button.

Github should now tell you where your page is hosted. You can also add your own
domain here.
