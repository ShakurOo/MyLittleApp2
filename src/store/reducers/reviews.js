// @flow
import type { Action } from 'store'
import type { Review } from 'types'
import { REVIEW_FETCHED } from '../actions'

export type ReviewsState = {|
  +list: ?Array<Review>
|}

const initialState = {
  list: [{
    author: 'Thor',
    amount: 5,
    format: 'p',
    isPrivate: false,
    number: 20,
    text: `<p>Lorem ipsum consectetur leo mollis pellentesque eleifend leo auctor porttitor iaculis, orci facilisis ut magna primis lobortis auctor semper felis, aptent nibh non fermentum orci maecenas nam amet massa dui mi arcu nec molestie massa ultricies sodales.<p>\r<p>Hendrerit eros rhoncus malesuada tortor etiam sollicitudin bibendum senectus pellentesque risus, luctus tempor nostra vulputate nullam nam mi facilisis dapibus, hendrerit imperdiet placerat leo eros justo quisque class habitasse.<p>`,
    time: '22:44:14',
    type: 'lorem'
  }, {
    author: 'Arnold Schwarzenegger',
    amount: 15,
    format: 'p',
    isPrivate: false,
    number: 20,
    text: `<p>Lorem ipsum neque netus sem curabitur purus nec conubia litora sollicitudin, eget dapibus proin ullamcorper inceptos odio fermentum elementum egestas scelerisque hac porta diam.<p>\r<p>Interdum id ornare gravida consectetur mattis sociosqu cras est porttitor augue, conubia commodo tincidunt magna a elementum orci cras pretium inceptos nisl, proin nostra eleifend accumsan cras ultrices et in purus.<p>\r<p>Tortor mauris est consectetur condimentum ullamcorper quam sagittis lorem fermentum, eleifend purus per dapibus maecenas praesent donec aenean nullam dapibus fames conubia sapien aenean leo quisque, ultricies consequat amet nostra conubia velit, ornare odio tellus himenaeos ante maecenas.<p>
    <strong>I'll be back...</strong>`,
    time: '22:50:47',
    type: 'lorem'
  },
  {
    author: 'Casper',
    amount: 15,
    format: 'p',
    isPrivate: true,
    number: 20,
    text: `<p>BOOOOOuuuuuuuuh</p>`,
    time: '00:00:00',
    type: 'lorem'
  }]
}

export default (state: ReviewsState = initialState, action: Action): ReviewsState => {
  if (action.type === REVIEW_FETCHED) {
    /* eslint-disable camelcase */
    const {
      amount, format, number, text_out, time, type
    } = action.payload.review
    const newState = {
      ...state,
      list: [
        ...state.list,
        {
          author: null,
          amount,
          format,
          isPrivate: false,
          number,
          text: text_out,
          time,
          type
        }
      ]
    }
    return newState
  }

  return state
}
