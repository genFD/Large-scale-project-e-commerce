import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import sections from "./directory.data";
import './directory.styles.scss'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "./directory.selector";

const Directory = ({sections})=> {
  return (
    <div className="directory-menu">
      {
        sections.map(({id, ...otherProps})=>{
          return <MenuItem key={id} {...otherProps} />
        })
      }
    </div>
  )
}
const mapStateToProps = createStructuredSelector(
  {
    sections: selectDirectorySections
  }
)
export default connect(mapStateToProps)(Directory) 