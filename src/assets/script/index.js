import '../scss/style.scss'

import FrontComponent from './components/front.component'
import ContainerComponent from './components/container.component'
import NavComponent from './components/nav.component'
import PostComponent from './components/post.component'
import CreateComponent from './components/create.component'
import FavoriteComponent from './components/favorite.component'

const front = new FrontComponent("front")
const container = new ContainerComponent("container")
const nav = new NavComponent("nav")
const posts = new PostComponent("posts")
const create = new CreateComponent("create")
const favorites = new FavoriteComponent("favorites")

front.controlContainer(container)

nav.registerItems([
    {name: 'posts', component: posts},
    {name: 'create', component: create},
    {name: 'favorites', component: favorites}
])
