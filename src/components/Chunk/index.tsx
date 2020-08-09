import React, {
  PureComponent,
  ComponentType
} from 'react'
import Loader from '../Loader'
import { Wrapper } from './style'

let fakeViewTransitionDelay: ReturnType<typeof setTimeout>

interface ChunkProps {
  load: { (): Promise<ComponentType> }
}

interface ChunkState {
  ComponentChild: ComponentType|null
}

export default class Chunk extends PureComponent<ChunkProps, ChunkState> {

  constructor (props: ChunkProps) {
    super(props)

    this.state = {
      ComponentChild: null
    }

    this.load()
  }

  componentDidUpdate (prevProps: ChunkProps): void {
    if (prevProps.load !== this.props.load) {
      this.load()
    }
  }

  componentWillUnmount (): void {
    fakeViewTransitionDelay && clearTimeout(fakeViewTransitionDelay)
  }

  load = (): void => {
    if (this.state.ComponentChild) {
      this.setState({ ComponentChild: null })
    }

    this.props.load()
      .then((component: ComponentType & { default: ComponentType }) => {
        fakeViewTransitionDelay = setTimeout(() => {
          this.setState({
            ComponentChild: component.default || component
          })
        }, Math.floor(Math.random() * 900) + 100)
      })
  }

  render (): JSX.Element {
    const ComponentChild = this.state.ComponentChild

    return (this.state.ComponentChild)
      ? <ComponentChild {...this.props} />
      : <Wrapper>
          <Loader />
        </Wrapper>
  }
}
