Duktape
=======

Introduction
------------

[Duktape](http://duktape.org/) is an **embeddable Javascript** engine,
with a focus on **portability** and **compact** footprint.

Duktape is easy to integrate into a C/C++ project: add `duktape.c` and
`duktape.h` to your build, and use the Duktape API to call Ecmascript
functions from C code and vice versa.

Main features:

* Embeddable, portable, compact
* Ecmascript E5/E5.1 compliant
* Built-in regular expression engine
* Built-in Unicode support
* Minimal platform dependencies
* Combined reference counting and mark-and-sweep garbage collection with finalization
* Liberal license

See [duktape.org](http://duktape.org/) for packaged end-user downloads
and documentation.  The end user downloads are also available from the
[duktape-releases](https://github.com/svaarala/duktape-releases) repo
as both binaries and in unpacked form as git tags.

Have fun!

Support
-------

* User community Q&A: Stack Overflow [duktape](http://stackoverflow.com/questions/tagged/duktape) tag
* Bugs and feature requests: [GitHub issues](https://github.com/svaarala/duktape/issues)
* General discussion: IRC `#duktape` on `chat.freenode.net` ([webchat](https://webchat.freenode.net))

About this repository
---------------------

This repository is **intended for Duktape developers only**, and contains
Duktape internals: test cases, internal documentation, sources for the
duktape.org web site, etc.

Current branch policy: the "master" branch is used for active development,
other branches are frequently rebased feature branches (so you should not
fork off them), and tags are used for releases.

Getting started: end user
-------------------------

When embedding Duktape in your application you should use the packaged source
distributables available from [duktape.org/download.html](http://duktape.org/download.html).
See [duktape.org/guide.html#gettingstarted](http://duktape.org/guide.html#gettingstarted)
for the basics.

However, if you really want to use a bleeding edge version:

    $ git clone https://github.com/svaarala/duktape.git
    $ cd duktape
    $ make dist-src

Then use `duktape-<version>.tar.xz` like a normal source distributable.

Getting started: developing Duktape
-----------------------------------

If you intend to change Duktape internals, build the source distributable or
the website, run test cases, etc:

    # Install required packages (exact packages depend on distribution)
    $ sudo apt-get install nodejs nodejs-legacy npm perl ant openjdk-7-jdk \
          libreadline6-dev libncurses-dev python-rdflib python-bs4 clang llvm

    # Compile the command line tool ('duk')
    $ git clone https://github.com/svaarala/duktape.git
    $ cd duktape
    $ make

    # Run Ecmascript and API testcases, and some other tests
    $ make ecmatest
    $ make apitest
    $ make regfuzztest
    $ make underscoretest    # see doc/underscore-status.txt
    $ make test262test       # see doc/test262-status.txt
    $ make emscriptentest    # see doc/emscripten-status.txt
    $ make jsinterpretertest
    $ make luajstest
    $ make dukwebtest        # then browse to file:///tmp/dukweb-test/dukweb.html
    $ make xmldoctest
    $ make bluebirdtest
    # etc

**Note: the repo Makefile is intended for Linux developer use**, it is not a
multi-platform "end user" Makefile.  In particular, the Makefile is not
intended to work on e.g. OSX or Windows.  The source distributable has more
user-friendly Makefile examples, but you should normally simply write your
own Makefile when integrating Duktape into your program.

Versioning
----------

Duktape uses [Semantic Versioning](http://semver.org/), see
[Versioning](http://duktape.org/guide.html#versioning).

Reporting bugs
--------------

See [CONTRIBUTING.md](https://github.com/svaarala/duktape/blob/master/CONTRIBUTING.md).

Contributing
------------

See [CONTRIBUTING.md](https://github.com/svaarala/duktape/blob/master/CONTRIBUTING.md).

Copyright and license
---------------------

See [AUTHORS.rst](https://github.com/svaarala/duktape/blob/master/AUTHORS.rst)
and [LICENSE.txt](https://github.com/svaarala/duktape/blob/master/LICENSE.txt).
