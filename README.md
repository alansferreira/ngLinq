# ngLinq

## Installations
**NodeJs**

```
npm i ng-linq
```

**Bower**
```
bower i ng-linq
```

**Html**
```html
<script src='bower_components/angular-linq/dist/ng-linq.min.js'>
```


## Use

```html
<script src='bower_components/angular/angular.min.js'>
<script src='bower_components/linqjs/linq.min.js'>

<script src='bower_components/angular-linq/dist/ng-linq.min.js'>

<script>
angular('myApp', ['ngLinq'])
.controller('ctrl1', function($scope, $from){
    $scope.data = [
        {id: 2, text: 'item 2'},
        {id: 1, text: 'item 1'},
        {id: 3, text: 'item 3'},
    ];
    
    var sortedByName = $from($scope.data).orderBy('$.text').toArray();
    var allIds = $from($scope.data).select('$.id').toArray();
    var allTexts = $from($scope.data).select('$.text').toArray();
    
    //controller stuffs...


});
</script>
```

## Depencencies 

> https://github.com/mihaifm/linq for bower

> https://github.com/joaom182/linqjs        for npm
