# Introduction to React

## Getting Started

Before you start make sure you have the following installed 

* Node / NPM - [installation instructions](https://nodejs.org/en) 
* Yarn - [installation instructions](https://yarnpkg.com/getting-started/install)

Once those are installed, checkout this repository (if you haven't already). 

    git clone https://github.com/hippo-digital/intro-to-react

once checked out navigate to the checked out directory by default this will be `intro-to-react`

    cd intro-to-react

once in the directory run

    yarn install

then 

    yarn run dev

if it is successful, you should see something like the following in the terminal

    yarn run v1.22.19
    $ next dev
    - ready started server on 0.0.0.0:3000, url: http://localhost:3000
    - warn You have enabled experimental feature (forceSwcTransforms) in next.config.js.
    - warn Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.
    - event compiled client and server successfully in 505 ms (306 modules)
    - wait compiling...
    - event compiled client and server successfully in 141 ms (306 modules)

the warnings are OK, it is because we are using an experimental feature of Next.js. Once the script is running open a browser and navigate to http://localhost:3000

