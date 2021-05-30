# State Manager: Publisher-Subscriber Pattern

Today we're going to be building a tool to keep track of global state for an application. 

This is a single source of truth where all data is published across an application, where other components can subscribe and invoke functions to make changes to attributes.

The API will be strict, so that only action functions can be called to uplift the attributes of state.

# Phase 1: The Store Class