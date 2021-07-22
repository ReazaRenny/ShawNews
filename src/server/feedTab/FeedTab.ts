import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/feedTab/index.html")
@PreventIframe("/feedTab/config.html")
@PreventIframe("/feedTab/remove.html")
export class FeedTab {
}
