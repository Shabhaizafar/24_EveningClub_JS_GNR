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




