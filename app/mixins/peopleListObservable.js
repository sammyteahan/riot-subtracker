import Riot from 'riot';

export default function() {

  /**
  * Make this instance an observable
  */
  Riot.observable(this);

  /**
  * @desc function responsible for any logic required,
  * and passing data to our observers
  *
  * @params countArray {array} - countArray from main.tag
  */
  let setCountStore = (countArray) => {
    this.trigger('setCountStore', countArray);
  }

  /**
  * @desc mixins extend functionality of a component.
  * so it's helpful to throw a debugger in the onmount
  * life cycle call and see this function is available
  * to an extended component (`let` prduces a private 
  * function only known to this local scope)
  */
  this.testFunction = (e) => {
    console.log('doing it real big');
  }

  /**
  * @desc on setCountAction, call _setCountStore.
  * our countArray object in the main.tag is 
  * implicitly passed as a parameter in the
  * setCountStore function.
  */
  this.on('setCountAction', setCountStore);
}