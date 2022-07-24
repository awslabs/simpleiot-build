# Website and installation documentation

This is the source to the SimpleIOT landing static, website, documentation, and (optionally)
blog.

It is built using the [Docusaurus](https://docusaurus.io/) static web building stack. It uses
`npm` to build the necessary output. 

To start building the stack: 

```
cd docsrc/website/simpleiot
npm install
npx docusaurus start
```

To make things simpler, there is a PyInvoke script one level up which allows you to use the same
commands for all the different documentation tool.

To install the PyInvoke commands, it's recommended you create a python virtual environment to avoid
polluting your system Python global directory with it. 

To do so, open a terminal and go into the 'docsrc' directory. Since all the documentation tools
use the same 'invoke' command, it's best to set up the environment at this level. First, let's make 
sure you have the right version of Python.

```
% python3 --version
Python 3.9.4
```
If you get something like 3.8 or above, you're fine. If you get an error or something lower, you'll need to 
update your Python interpreter to a more recent version. The easiest way is to go to [https://www.python.org/](https://www.python.org/)
and click on the 'Downloads' tab, then download the version for your operating system.

Once it downloads, follow installation instructions. When done, close your terminal and reopen it so it's using the
latest version and path settings. Run the above again to make sure it installed and is found in your path.

Next, you'll need to create a local virtual environment. In the `docsrc` directory, issue the following commands:

```
% cd docsrc
% python3 -m venv doc-venv
% source doc-venv/bin/activate
```

The python3 command creates the local python environment in the directory called `doc-venv`. Test to make sure you're
running the current version of python:

```
% python --version
```

Notice this time we're running `python` not `python3`. The version you should get shoule match the one you downloaded from the 
installation site, or the highest version you have on your machine. If it says `2.7` or an unexpected number, delete the
`doc-venv` folder and start again.

If it does match, now you have to install the pre-requisites. Just type:

```
% pip install -r requirements.txt
```

This installs the libraries needed by PyInvoke and the build tool. You only need to run this once. From now on each time 
you go into that directory to make changes, you will need to first 'activate' to start using that environment:

```
% cd docsrc
% source doc-venv/bin/activate
% cd {documentation directory or website}
% invoke serve
```

Now that all the pre-requisites are installed, check to make sure your `docsrc` directory has the `tasks.py` file. 

To get a list of commands available:

```
% invoke --list
Available tasks:

  build
  clean
  serve
  show
```

To start a local web-server to interactively edit the docs:

```
% invoke serve
```

To compile and generate the output file:

```
invoke build
```

To clean up the directory:

```
invoke clean
```

To push to the SimpleIOT repo, the configuration files and access credentials for the github 
repo will be needed. These are made available only to the core developers. Please contact 
the dev team for more information.

Once those credentials are installed, you will also be able to deploy the latest changes to
the github repo with:

```
invoke deploy
```

If you want to push a copy of this material to your own repository, here are the instructions
for [deploying to github pages](https://docusaurus.io/docs/deployment#deploying-to-github-pages).

