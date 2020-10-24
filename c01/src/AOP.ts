interface IDecoratorExample {
  AnyoneCanRun(args:string) : void;
  AdminOnly(args:string) : void;
}

class NoRoleCheck implements IDecoratorExample {
  @Role('user')
  AnyoneCanRun(args: string):void {
    console.log(args);
  }
  
  // @Admin
  @Role('admin')
  AdminOnly(args:string):void {
    console.log(args);
  }
}

let currentUser = {
  user: 'peter',
  roles: [
    {
      role: 'user',
    },
    {
      role: 'admin'
    }
  ]
}

function TestDecoratorExample(decoratorMethod : IDecoratorExample) {
  console.log(`Current user ${currentUser.user}`);
  decoratorMethod.AnyoneCanRun('Running as user');
  decoratorMethod.AdminOnly('Running as admin');
}

TestDecoratorExample(new NoRoleCheck());


function isInRole(role: string): boolean {
  return currentUser.roles.some(r => r.role === role);
}

// Admin装饰器
function Admin(target:any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
  let originalMethod = descriptor.value;
  descriptor.value = function() {
    if(isInRole('admin')) {
      originalMethod.apply(this, arguments);
      return;
    }
    console.log(`${currentUser.user} is not in the admin role`)
  }
  return descriptor;
}

// Role装饰器工厂
function Role(role: string) {
  return function(target:any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function() {
      if(isInRole(role)) {
        originalMethod.apply(this, arguments);
        return;
      }
      console.log(`${currentUser.user} is not in the ${role} role`)
    }
    return descriptor;
  }
}