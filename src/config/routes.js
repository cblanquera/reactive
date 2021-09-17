import TemplateSearch from '../client/views/Template/Search'
import SchemaSearch from '../client/views/Schema/Search'

export default [
  {
    href: '/admin/schema/search',
    route: '/server/routes/schema/search',
    view: SchemaSearch
  },
  {
    href: '/admin/template',
    route: '/server/routes/template/search',
    view: TemplateSearch
  }
]