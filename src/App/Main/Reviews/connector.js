import { connect } from 'react-redux'
import { onLoadReview } from 'store/actions'
import { getDevice } from 'store/selectors'

const mapStateToProps = state => ({
  device: getDevice(state)
})

const mapDispatchToProps = ({
  onLoadReview
})

export default connect(mapStateToProps, mapDispatchToProps)
