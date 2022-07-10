import 'tailwindcss/tailwind.css'

function SidebarMenuItem({text,Icon}) {
  return (
    <div>
        <Icon  ClassName="hoverEffect" height="25px"/>
        <span>{text}</span>
    
    </div>
  )
}

export default SidebarMenuItem