import { MobileAd, MobileAdOptions } from './base'

export default class InterstitialAd extends MobileAd<MobileAdOptions> {
  static readonly cls = 'InterstitialAd'

  public isLoaded() {
    return super.isLoaded()
  }

  public load() {
    return super.load()
  }

  public show() {
    return super.show()
  }
}
