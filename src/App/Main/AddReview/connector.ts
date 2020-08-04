// @flow
import { connect } from 'react-redux'
import { ReviewForm } from '@app/types'
import { onReviewAddStarted } from '@app/store/actions'

const mapDispatchToProps = ({
  onValidFormReview: (reviewForm: ReviewForm) => onReviewAddStarted(reviewForm)
})

export default connect(() => ({}), mapDispatchToProps)
