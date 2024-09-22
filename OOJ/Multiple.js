// some base class
class BaseClass { }


// SocialNetworkMixin
const SocialNetwork = (superclass) => class extends superclass {
    foo() {
        console.log('foo');
    }
}
// AdProviderMixin
const AdProvider = (superclass) => class extends superclass {
    bar() {
        console.log('bar');
    }
}
// Our helper class that will make things look better
class MixinBuilder {
    constructor(superclass) {
        this.superclass = superclass;//undefined //{}   empty class
    }
    //method
    with(...mixins) {
        return mixins.reduce((c, mixin) => mixin(c), this.superclass);
    }
}
// this will combine everything in one class
const mix = (superclass) => new MixinBuilder(superclass);

class Facebook extends mix(BaseClass).with(SocialNetwork, AdProvider) {}
const fb = new Facebook();
fb.foo();
fb.bar();





var Arr =[1,2,3,4,5,6,7,78];

Arr.reduce(
    //13            2
    (currentvalue,nextvalue)=>{

    },12
);






//////////////
/*
Mixin and Class Inheritance Questions:
Modify the MixinBuilder class so that it also accepts an array of static methods and applies them to the target class.
//-----------------
Add a mixin NotificationMixin that has methods sendNotification() and scheduleNotification(). Combine this with the Facebook class and test the methods.
//-----------------

Write a program that uses the MixinBuilder to combine multiple mixins dynamically based on user input.
//-----------------

Create a class Instagram that uses both SocialNetwork and AdProvider mixins, but implement a custom bar() method that overrides the AdProvider mixin's bar() behavior.
//-----------------

How would you modify the Facebook class to ensure that it uses different methods from each mixin, without any method name conflicts?
//-----------------

Create a LoggerMixin that adds a log() method to any class. Use this mixin with the Facebook class and log messages whenever foo() or bar() is called.
//-----------------

Implement a scenario where one mixin depends on methods from another mixin. Demonstrate how you would resolve the dependency using MixinBuilder.
//-----------------

Write a program that chains two mixins in a single class but ensures they can be turned on or off dynamically.
//-----------------

Create a base class Vehicle and use mixins to add specific behaviors like DriveMixin for cars and FlyMixin for planes. Then, create a FlyingCar class using both mixins.
//-----------------
*/