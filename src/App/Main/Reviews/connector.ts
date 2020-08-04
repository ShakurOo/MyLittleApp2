import { connect } from 'react-redux'
import { onGetReview } from '@app/store/actions'
import { getReviewsList } from '@app/store/selectors'

const mapStateToProps = state => ({
  reviews: getReviewsList(state)
})

const mapDispatchToProps = ({
  onGetReview
})

export default connect(mapStateToProps, mapDispatchToProps)
