import { Component } from '@angular/core';
import { IContact } from '../../shared/interfaces/icontact';

@Component({
  selector: 'seia-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  knownTechnologies: string[] = [
    '.NET / C# - (intermediate) - used IDE is Visual Studio (Windows) / MonoDevelop or Visual Studio Code (Linux) (sometimes VS Code)',
    'Java - (intermediate) - used IDE is Eclipse or NetBeans (mainly for applications in window or Web Services) (Windows / Linux)',
    'C/C++ - (average) - used IDE is Visual Studio (Windows) / CodeBlocks or Eclipse-Cpp (Linux) / Atmel Studio (microcontrollers)',
    'SQL / MySQL - (average) - used software is Microsoft SQL Management Tools (Windows) / DBeaver (Linux)',
    'Prolog - (basic) - used IDE is SWI-Prolog (Windows)',
    'Python - (basic / average) - used IDE is PyCharm (Windows / Linux)',
    'Android - (basic) - used IDE is Android Studio (Windows / Linux)',
    'Angular 6 (TypeScript) + Angular Material - (average)',
    'HTML / CSS / JavaScript - (average) - used IDE is Visual Studio or VS Code (Windows) / VS Code (Linux)'
  ];

  contacts: IContact[] = [
    { buttonText: 'E-Mail Me :)', link: 'mailto:k.dobrzynski94@gmail.com' },
    { buttonText: 'My Top Popular Minecraft Mod', link: 'https://minecraft.curseforge.com/projects/vanilla-magic' },
    { buttonText: 'GitHub', link: 'https://github.com/Sejoslaw' },
    { buttonText: 'LinkedIn', link: 'https://www.linkedin.com/in/krzysztof-dobrzy%C5%84ski-849563140/' }
  ];

  constructor() {}
}
