// eslint-disable-next-line node/no-missing-import
import { getPage, PageState } from "./lib/views";

(async function init() {
  await getPage(PageState.FindOrCreate, {});
})();
