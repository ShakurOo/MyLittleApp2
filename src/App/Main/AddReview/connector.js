// @flow
import { connect } from 'react-redux'
import { type ReviewForm } from 'types'
import { onReviewAddStarted } from 'store/actions'

const mapDispatchToProps = ({
  onValidFormReview: (reviewForm: ReviewForm) => onReviewAddStarted(reviewForm)
})

export default connect(() => ({}), mapDispatchToProps)
