import { connect } from 'react-redux'
import { onGetDevice } from '@app/store/actions'
import { getDevice } from '@app/store/selectors'

const mapStateToProps = state => ({
  device: getDevice(state)
})

const mapDispatchToProps = ({
  onGetDevice: () => {
    console.log('ACTION GET_DEVICE DISPATCHED ...')
    return onGetDevice()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
