import {TaskName, TagsCategory, ListItem} from './style'

const TabItem = props => {
  const {taskDetails} = props
  const {taskName, taskCategory} = taskDetails

  return (
    <ListItem>
      <li>
        <TaskName>{taskName}</TaskName>
        <TagsCategory>{taskCategory}</TagsCategory>
      </li>
    </ListItem>
  )
}

export default TabItem
