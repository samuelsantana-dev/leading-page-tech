export class Breakpoint {
  private static readonly sm = 650;
  private static readonly md = 768;
  private static readonly lg = 1024;
  private static readonly xl = 1280;

  /**
   * @returns `650`
   */
  public static getMobileScreenSize() {
    return this.sm;
  }

  /**
   * @returns `768`
   */
  public static getTabletScreenSize() {
    return this.md;
  }

  /**
   * @returns `1024`
   */
  public static getLaptopScreenSize() {
    return this.lg;
  }

  /**
   * @returns `1280`
   */
  public static getDesktopScreenSize() {
    return this.xl;
  }
}
