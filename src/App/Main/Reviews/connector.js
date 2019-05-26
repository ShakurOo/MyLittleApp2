import { connect } from 'react-redux'
import { onGetReview } from 'store/actions'
import { getReviewsList } from 'store/selectors'

const mapStateToProps = state => ({
  reviews: getReviewsList(state)
})

const mapDispatchToProps = ({
  onGetReview
})

export default connect(mapStateToProps, mapDispatchToProps)
