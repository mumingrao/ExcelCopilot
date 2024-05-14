Component({
  properties: {
    color: {
      type: String,
      value: 'red'
    }
  },
  methods: {
    getColor: function () {
      console.log('getColor');
      return "background-color: red;" 
    }
  }
});