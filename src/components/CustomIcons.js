
import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import icoMoonConfig from './selection.json'
const expoAssetId = require('../../assets/fonts/icomoon.ttf')
const InstaIcon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', expoAssetId)
export default InstaIcon
