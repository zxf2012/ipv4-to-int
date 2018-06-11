var toInt = require('../index');

var assert = require('assert');

describe('test index', function() {
  describe('toInt work', function() {
    it('should "172.168.5.1" equal to 2896692481', function() {
        assert.equal(toInt('172.168.5.1'), 2896692481);
    })
    it('should "172 . 168.5.1" equal to 2896692481', function() {
        assert.equal(toInt('172 . 168.5.1'), 2896692481);
    })
    it('should "172 .  168.5.1" equal to 2896692481', function() {
        assert.equal(toInt('172 .  168.5.1'), 2896692481);
    })
    it('should " 172.168.5.1" throw error', function() {
        assert.throws(function () {
            toInt(' 172.168.5.1')
        }, /^Error: error ipv4$/)
    })
    it('should "172.168.5.1 " throw error', function() {
        assert.throws(function () {
            toInt('172.168.5.1 ')
        }, /^Error: error ipv4$/)
    })
  })
})
