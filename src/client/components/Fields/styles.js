import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  fieldTextListDisplay: {
    marginTop: 16
  },
  fieldTextListDisplayInput: {
    width: 'calc(100% - 30px)'
  },
  fieldTextListRemove: {
    marginTop: 2
  },
  fieldMetadataDisplay: {
    marginTop: 16
  },
  fieldMetadataDisplayKey: {
    width: 'calc(30% - 10px)'
  },
  fieldMetadataDisplayValue: {
    marginLeft: 10, 
    width: 'calc(70% - 30px)'
  },
  fieldMetadataRemove: {
    marginTop: 2
  },
  fieldColorPicker: {
    display: 'flex',
    marginTop: 16,
    flexDirection: 'row',
    width: '100%',
  },
  fieldColorPickerField: {
    flexGrow: 1,
  },
  fieldColorPickerButton: {
    margin: 6,
  }
}), { name: 'ReactiveComponentFields' })