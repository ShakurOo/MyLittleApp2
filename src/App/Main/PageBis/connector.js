import { connect } from 'react-redux'
import { onGetDevice } from 'store/actions'
import { getDevice } from 'store/selectors'

const mapStateToProps = state => ({
  device: getDevice(state)
})

const mapDispatchToProps = ({
  onGetDevice
})

export default connect(mapStateToProps, mapDispatchToProps)
