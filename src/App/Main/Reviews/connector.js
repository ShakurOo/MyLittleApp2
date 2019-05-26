import { connect } from 'react-redux'
import { onGetReview } from 'store/actions'
import { getDevice } from 'store/selectors'

const mapStateToProps = state => ({
  device: getDevice(state)
})

const mapDispatchToProps = ({
  onGetReview
})

export default connect(mapStateToProps, mapDispatchToProps)
