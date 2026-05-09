import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import * as Blockly from 'blockly';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@Component({
  selector: 'app-edit',
  imports: [NzLayoutModule, NzMenuModule, NzIconModule],
  templateUrl: './edit.html',
  styleUrl: './edit.scss',
})
export class Edit implements AfterViewInit {

  workspace!: Blockly.WorkspaceSvg;

  @ViewChild('blockly', { static: true }) blocklyDiv!: ElementRef;

  ngAfterViewInit(): void {
    this.workspace = Blockly.inject(this.blocklyDiv.nativeElement, {
      toolbox: `
        <xml>
          <block type="controls_if"></block>
          <block type="logic_compare"></block>
          <block type="math_number"></block>
          <block type="math_arithmetic"></block>
          <block type="text"></block>
          <block type="text_print"></block>
        </xml>
      `,

      grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
      },

      zoom: {
        controls: true,
        wheel: true,
        startScale: 1,
        maxScale: 3,
        minScale: 0.2
      },

      trashcan: true
    });
  }


  load() {
    const json = localStorage.getItem('workspace');
    if (!json) {
      return;
    }
    Blockly.serialization.workspaces.load(
      JSON.parse(json),
      this.workspace
    );
  }

}
