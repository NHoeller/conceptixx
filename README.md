[modula](http://www.conceptixx.de/) - modula
==================================================

introdution
--------------------------------------------------

there are many many many frameworks and systems for php (as serversoftware like cms), javascript (libraries like jQuery or mootools), and cascading style sheets (e.g bootstrap or animate.css). all these systems are professional and useful as well, but:
- using to many of them slows the internet performance
- often they include much more then we need (why buy a cow if i want a simple burger)
- there are no or not enough possibilities to combine them (in a useful way)

what is modula (or what modula wants to be)
--------------------------------------------------
modula tries to combine everything in one. the base of modula will be a self optimizing and self configuring core.
this core will be designed to deliver the best possible performance, every time. in detail this means
- the core running on the webserver will only use the minimum needed resources to respond to the client
- the client will only get the required html, js and css depending on the client system
- the client will get any data (used by clicking a hyperlink) through ajax requests
- the core will (in best case) only deliver the missing html, js and css
- the system will be full cachable by using a cdn / cloud solution
