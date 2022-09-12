// SOLID PRINCIPLES
// S -> Single Responsbility Principle
// A class should have only one reason for change
// O -> Open-Close Principle
// A class should be open for extension but closed for modification
// L -> Liskov Substitution Principle
// T <-- S
// I -> Interface Segregation Principle
// D -> Dependency Inversion Principle
// => High level Modules shouldn't depend on low level modules, but both should depend on an abstraction

// The Computer Analogy
/**
 * Computer
 * - inputing data from the keyboard
 * - inputing data from the mouse
 * - process data using the central processing unit (cpu)
 * - store / retrieve data into and from the internal memory
 * - store / retrieve data into and from the external memory
 * - display information on a monitor
 * - project information on an external screen
 **/

interface InputDevice {
  input(data: any): void;
}

class Keyboard implements InputDevice {
  // Data

  // Methods
  input(data: string) {
    console.log('Picking data from the Keyboard...');
  }
}

class Mouse implements InputDevice {
  // Data

  // Methods
  input(data: string) {
    console.log('Picking data from the Mouse...');
  }
}

abstract class Memory {
  abstract store(data: any): boolean;
  abstract retrieve(query: string): any;
}

class InternalMemory implements Memory {
  // Data

  // Methods
  store(data: any) {
    console.log(`Storing data {${data}} in internal memory...`);
    return true;
  }

  retrieve(query: string) {
    console.log('Retrieving data from internal memory...');
  }
}

class ExternalMemory {
  // Data

  // Methods
  store(data) {
    console.log(`Storing data {${data}} in external memory...`);
    return true;
  }

  retrieve(query: string) {
    console.log('Retrieving data from external memory...');
  }
}

class CPU {
  // Data

  // Methods
  process(data: string) {
    console.log('Processing data using the CPU...');
  }
}

interface OutputDevice {
  output(information: any): void;
}

class Monitor implements OutputDevice {
  // Data

  // Methods
  output(information: any): void {
    console.log(information);
  }
}

class Projector {
  // Data

  // Methods
  output(information: any): void {
    console.log(information);
  }
}



// A Controller Class => Delegates responsibilities and doesn't have a concrete implementation.
class Computer {
  // Data / Attributes
  private inputDevice: InputDevice;
  private memory: Memory;
  private outputDevice: OutputDevice;

  // Methods / Operations
  constructor(
    inputDevice: InputDevice,
    memory: Memory,
    outputDevice: OutputDevice
  ) {}

  input(data: string) {
    this.inputDevice.input(data);
  }

  store(data: any) {
    this.memory.store(data);
  }

  retrieve(query: string) {
    this.memory.retrieve(query);
  }

  output(information: any) {
    this.outputDevice.output(information);
  }

  process(data: string) {
    const cpu = new CPU();
    cpu.process(data);
  }

  // Setters
  setInputDevice(inputDevice: InputDevice) {
    this.inputDevice = inputDevice;
  }
  setOutputDevice(outputDevice: OutputDevice) {
    this.outputDevice = outputDevice;
  }
  setMemory(memory: Memory) {
    this.memory = memory;
  }
}

// Instantiating
// Using Constructor
let lenovo: Computer = new Computer(
  new Keyboard(),
  new InternalMemory(),
  new Monitor()
);

// Using Setters
lenovo.setInputDevice(new Mouse())
lenovo.setMemory(new ExternalMemory())
lenovo.setOutputDevice(new Projector())