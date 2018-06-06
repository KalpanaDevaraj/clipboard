Deploying a React App* to GitHub Pages

* created using create-react-app
Introduction

In this tutorial, I'll show you how I deployed a React app—which I created using create-react-app—to GitHub Pages.

You can visit the deployed app, at https://gitname.github.io/react-gh-pages/.

This repository contains the files related to the app. The master branch contains the app's source code (the code the app's developers edit), and the gh-pages branch contains a built version of the app (i.e. the code that GitHub Pages serves to the app's visitors).

The remainder of this document contains a tutorial on creating a React app (using create-react-app) and deploying that app to GitHub Pages.
Tutorial
Prerequisites

    An adequate version of Node.js is installed. Here's the adequate version I use:

    $ node --version
    v9.11.1

    An adequate version of npm is installed. Here's the adequate version I use:

    $ npm --version
    5.6.0

    An adequate version of create-react-app is installed. Here's the adequate version I use:

    $ create-react-app --version
    1.5.2

    In the case of create-react-app, you can either install it globally (i.e. $ npm install -g create-react-app) or install it locally (i.e. $ npm install create-react-app). If you choose the latter, you will have to specify its path whenever you invoke it (e.g. path/to/node_modules/.bin/create-react-app).

   
    A GitHub account. :octocat:

Procedure

    Create an empty repository on GitHub. (2 minutes)
        For this tutorial, I'll create a repository named react-gh-pages.
        By empty, I mean without a README.md file, a .gitignore file, a LICENSE file, or any other files.

    Create a new React app on your computer. (5 minutes)

    $ create-react-app clipboard

        This is the app you will deploy to GitHub Pages in step 7.
        I opted to give the app the same name as my GitHub repository (i.e. react-gh-pages). However, you can name them differently from one another (e.g. you can name your app app-123 and your GitHub Repository repo-456).
        This will create a new folder named clipboard (or whatever you named your app) on your computer.

    Install the gh-pages package as a "dev-dependency" of the app. (1 minute)

    $ cd clipboard
    $ npm install gh-pages --save-dev

        The commands shown in the following steps can all be issued from within the app's folder.

    Add some properties to the app's package.json file. (3 minutes)
        At the top level, add a homepage property. Define its value to be the string http://{username}.github.io/{repo-name}, where {username} is your GitHub username, and {repo-name} is the name of the GitHub repository you created in step 1. Since my GitHub username is gitname and the name of my GitHub repository is react-gh-pages, I added the following property:

    //...
    "homepage": "http://kalpanadevaraj.github.io/clipboard"

        In the existing scripts property, add a predeploy property and a deploy property, each having the values shown below:

    "scripts": {
      //...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }

        Shortcut: Instead of adding those properties using a text editor; if you have sed installed on your system, you can add the properties by issuing the following shell commands:

    $ sed -i '5i\  "homepage": "http://kalpanadevaraj.github.io/clipboard",' ./package.json
    $ sed -i '15i\    "predeploy": "npm run build",' ./package.json
    $ sed -i '16i\    "deploy": "gh-pages -d build",' ./package.json

    Create a git repository in the app's folder. (1 minute)

    $ git init
    Initialized empty Git repository in C:/path/to/clipboard/.git/

    Add the GitHub repository as a "remote" in your local git repository. (1 minute)

    $ git remote add origin https://github.com/KalpanaDevaraj/clipboard.git

        This will make it so the gh-pages package knows where you want it to deploy your app in step 7.
        It will also make it so git knows where you want it to push your source code (i.e. the commits on your master branch) in step 8.

    Generate a production build of your app, and deploy it to GitHub Pages. (2 minutes)

    $ npm run deploy

        That's it! Your app is now accessible at the URL you specified in step 4.
        In my case, my app is now accessible at: https://kalpanadevaraj.github.io/clipboard/
       
    Optionally, commit your source code to the "master" branch and push your commit to GitHub. (1 minute)

    $ git add .
    $ git commit -m "Create a React app and publish it to GitHub Pages"
    $ git push origin master

        I recommend exploring the GitHub repository once again at this point. When I did that, I noticed that a master branch now existed, and it contained the app's source code.
        So, the master branch held the source code, and the gh-pages branch held the built app code.

References

    Facebook's tutorial on deploying a React app to GitHub Pages

Notes

    I created this React app using create-react-app. By default, apps created using create-react-app have a README.md file that looks like this. Indeed, the README.md file you're now reading originally looked like that. I have since changed it to look the way it looks today.
    Special thanks to GitHub, Inc., for providing us with the GitHub Pages hosting functionality at no extra charge.
    And now, time to turn the default create-react-app app into something unique!

