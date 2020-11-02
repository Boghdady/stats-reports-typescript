import { OutputTarget } from "../Summary";
import fs from "fs";

export class HtmlReport implements OutputTarget {
  constructor(public reportPathName: string){}
  print(report: string): void {
    const html = `
      <div>
        <h1>Html Report</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync(this.reportPathName, html);
  }

}