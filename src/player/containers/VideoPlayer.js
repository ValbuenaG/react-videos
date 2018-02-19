import React, {Component} from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout'
import Video from '../components/Video'
import Title from '../components/Title'
import PlayPause from '../components/PlayPause'
import Timer from '../components/Timer'
import Controls from '../components/controls'
import {formattedTime} from '../../widgets/components/utilities'
import ProgressBar from '../components/ProgressBar'
import Loading from '../components/loading'
import Volume from '../components/Volume'
import FullScreen from '../components/FullScreen'
import {connect} from 'react-redux'

class VideoPlayer extends Component{
  state={
    pause: true,
    duration: 0,
    currentTime:0,
    loading:false,
  }
  toggleClick = (ev)=>{
    this.setState({
      pause:!this.state.pause
    })
  }
  componentDidMount(){
    this.setState({
      pause:(!this.props.autoplay)
    })
  }
  handleLoadedMetadata = (event)=>{
    this.video = event.target
    this.setState({
      duration: this.video.duration
    })
  }
  handleTimeUpdate = event =>{
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  handleChangeValue =event =>{
    this.video.currentTime = event.target.value
  }
  handleSeeking = event=>{
    this.setState({
      loading: true
    })
  }
  handleSeeked = event =>{
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = event =>{
    this.video.volume = event.target.value
  }
  handleFullScreen = event=>{
    if(!document.webkitIsFullScreen){
      this.player.webkitRequestFullscreen()
    }else{
      document.webkitExitFullscreen()
    }
  }
  setRef = element =>{
    this.player = element
  }
  render(){
    
    return(
      <VideoPlayerLayout
        setRef={this.setRef}>
        <Title
          title={this.props.media.get('title')}/>
        <Video
          src={this.props.media.get('src')}
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeked={this.handleSeeked}
          handleSeeking={this.handleSeeking}
          />
        
        <Controls>
          <PlayPause
            handleClick={this.toggleClick}
            pause={this.state.pause}/>
          <Timer 
           duration={formattedTime(this.state.duration)}
           currentTime={formattedTime(this.state.currentTime)}/>
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleChangeValue={this.handleChangeValue}/>
          <Volume 
            handleVolumeChange={this.handleVolumeChange}
            />
          <FullScreen 
            handleFullScreen={this.handleFullScreen}/>
        </Controls>
        <Loading loading={this.state.loading}/>
      </VideoPlayerLayout>
    )
  }
}
const mapStateToProps = (state, props)=>({
   media: state.get('data').get('entities').get('media').get(props.id)
})
export default connect(mapStateToProps)(VideoPlayer)