import {Component} from 'react';
import {StyleProp, ViewStyle} from 'react-native';


export interface IVideoProps {
    /**
     * A URL string (or number for local) is required.
     */
    url: string | number;
    /**
     * Autoplays the video as soon as it's loaded
     */
    autoPlay?: boolean;
    /**
     * Adds a title of your video at the top of the player
     */
    title?: string;
    /**
     * Adds an image placeholder while it's loading and stopped at the beginning
     */
    placeholder?: string;
    /**
     * Adds an image logo at the top left corner of the video
     */
    logo?: string;
    /**
     * Adds an optional theme colour to the players controls
     * default: white
     */
    theme?: string;
    /**
     * This hides the full screen control
     * default: false
     */
    hideFullScreenControl?: boolean;
    style?: StyleProp<ViewStyle>;
    /**
     * Fills the whole screen at aspect ratio. contain, cover etc
     * default: contain
     */
    resizeMode?: string;
    /**
     * Tapping the fullscreen button will rotate the screen. Also rotating the screen will automatically switch to fullscreen mode
     * default: false
     */
    rotateToFullScreen?: boolean;
    /**
     * This will play only in fullscreen mode
     * default: false
     */
    fullScreenOnly?: boolean;
    /**
     * This hides the fullscreen button and only plays the video in inline mode
     * default: false
     */
    inlineOnly?: boolean;
    /**
     * Audio continues to play when app enters background.
     * default: false
     */
    playInBackground?: boolean;
    /**
     * [iOS] Video continues to play when control or notification center are shown.
     * default: false
     */
    playWhenInactive?: boolean;
    /**
     * Adjusts the speed of the video. 0 = stopped, 1.0 = normal
     * default: 1
     */
    rate?: number;
    /**
     * Adjusts the volume of the video. 0 = mute, 1.0 = full volume
     * default: 1
     */
    volume?: number;
    /**
     * Adds an action button at the top right of the player. Use this callback function for your own use. e.g share link
     */
    onMorePress?: ()=>void;
    /**
     * Returns the fullscreen status whenever it toggles. Useful for situations like react navigation.
     * @param value
     */
    onFullScreen?: (value)=>void;
    /**
     * Callback when the stream receives metadata
     * @param value
     */
    onTimedMetadata?: (value)=>void;
    /**
     * Enables the bounce effect for the ScrollView
     */
    scrollBounce?: boolean;
    /**
     * Keep Portrait mode locked after Exiting from Fullscreen mode
     */
    lockPortraitOnFsExit?: boolean;
    /**
     * Force a specific ratio to the Video player. e.g. lockRatio={16 / 9}
     */
    lockRatio?: number;
    /**
     * Returns data once video is loaded
     * @param data
     */
    onLoad?: (data)=>void;
    /**
     * Returns progress data
     * @param progress
     */
    onProgress?: (progress)=>void;
    /**
     * Invoked when video finishes playing
     */
    onEnd?: ()=>void;
    /**
     * Returns an error message argument
     * @param error
     */
    onError?: (error)=>void;
    /**
     * Returns a boolean during playback
     * @param playing
     */
    onPlay?: (playing)=>void;
    /**
     * Pass in an object to Alert. See https://facebook.github.io/react-native/docs/alert.html
     */
    error?: boolean | any;
    /**
     * Set the visibility time of the pause button and the progress bar after the video was started
     * default: 3
     */
    controlDuration?: number;
}

declare class Video extends Component<IVideoProps, any> {

}

export default Video;
