import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Rohit Product</h1>
        <p class="text-lg text-gray-600 mb-8">Simple. Clean. Effective.</p>
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
          Get Started
        </button>
      </div>
    </div>
  `
})
export class HomeComponent {}