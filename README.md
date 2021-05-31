# State Manager: Publisher-Subscriber Pattern
This is going to be a tool to keep track of global state for an application. 

This is a single source of truth where all data is published across an application, where other components can subscribe and invoke functions to make changes to attributes.

The API will be strict, so that only action functions can be called to uplift the attributes of state.

# Phase 1: The Store Class
I will be using ES6 JavaScript syntax to represent an instantiated ```Store``` object that holds globally accessible attributes. 

The ```Store#constructor``` has a ```rootReducer``` parameter, which will be a callback returning the initial state. as they break up different component states into their own attributes on the global state.

The state is supposed to be immutable, or not changed from original attribute values in anyway, so I will simply return a shallow copy of the ```this.state``` with ```Object.assign```. Due to it having the same references in memory for nested collections as the original state, I will likely need to refactor this later.