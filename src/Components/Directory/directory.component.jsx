import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import sections from "./directory.data";
import './directory.styles.scss'

class Directory extends React.Component {
 constructor(){
  super()
   this.state = {
    sections,
   }
 }
 render(){
  return (
   <div className="directory-menu">
     {
      this.state.sections.map((item)=>{
       const {title, id, imageUrl, linkUrl, size} = item
       return <MenuItem key={id} title={title} image={imageUrl} size={size} />
      })
     }
  </div>
  )
 }
}

export default Directory