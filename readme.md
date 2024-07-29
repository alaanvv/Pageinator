# Summary

- [Components](#components)
    - [TopBar](#topbar)
    - [InfoSection](#infosection)
- [Todo](#todo)

# Components

## TopBar

- Props
```
  name: displayed name
  icon: path to displayed icon
  items: [{
    href: item url
    name: displayed text
  }]
  socials: [{
    href: social url
    icon: path to displayed icon
  }]
```

- Classes
```
  gradient: topbar fades
  transpatent: no background
  fixed: topbar stays on screen
  left: items float left
  right: items float right
  compact: compact distribution
```

## InfoSection

- Props
```
  title: title
  description: description
  background: path to background image
```

- Classes
```
  full: takes the whole screen
  v-center: text vertically centerd
  bottom: text on bottom
  h-center: text horizontally centerd
  right: text on right
  alt: uses alternative colors
  blur: blurres background
  max(50/60/70/80): max % of text width
  tac: text align center
  tae: text align end
```

# Todo

- [x] Make InfoSection responsive
