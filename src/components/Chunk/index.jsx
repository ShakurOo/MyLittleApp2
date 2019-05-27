// @flow
import React, { PureComponent, type Element, type ComponentType } from 'react'
import Loader from '../Loader'
import style from './style.css'

type Props = {
  load: () => Promise<*>,
  Loader: () => Element<*>
}

type State = { component: ComponentType<*> | null }

export default class Chunk extends PureComponent<Props, State> {
  static defaultProps = { Loader: Loader }

  constructor (props: Props) {
    super(props)

    this.state = { component: null }
    this.load()
  }

  componentDidUpdate (prevProps: Props) {
    if (prevProps.load !== this.props.load) { this.load() }
  }

  load = (): void => {
    const { component } = this.state

    if (component) { this.setState({ component: null }) }

    this.props.load()
      .then(component => {
        setTimeout(() => {
          /* Simulation loading */
          this.setState({ component: component.default || component })
        }, Math.floor(Math.random() * 900) + 100)
      })
  }

  render () {
    const Component = this.state.component
    const { Loader } = this.props

    return (Component)
      ? <Component {...this.props} Loader={null} />
      : (Loader)
        ? (
          <div className={style.wrapper}>
            <Loader />
          </div>
        )
        : 'Loading'
  }
}
