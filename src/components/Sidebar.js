import React from 'react'
import SidebarRow from './SidebarRow';
import {Chat, EmojiFlags, People, Storefront, VideoLibrary,ExpandMore} from '@material-ui/icons'
import useStateValue from "./AppState";



const Sidebar = () => {
  const [{user}, dispatch] = useStateValue()
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName}/>
      <SidebarRow Icon={EmojiFlags} title="Pages"/>
      <SidebarRow Icon={People} title="Friends"/>
      <SidebarRow Icon={Chat} title="Messanger"/>
      <SidebarRow Icon={Storefront} title="Marketplace"/>
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMore}  title="More"/>

    </div>
  )
}

export default Sidebar
