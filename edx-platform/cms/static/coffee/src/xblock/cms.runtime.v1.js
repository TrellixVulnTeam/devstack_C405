// Generated by CoffeeScript 1.6.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "backbone", "xblock/runtime.v1", "URI", "gettext", "js/utils/modal", "js/views/feedback_notification"], function($, Backbone, XBlock, URI, gettext, ModalUtils, NotificationView) {
    this.BaseRuntime = {};
    BaseRuntime.v1 = (function(_super) {

      __extends(v1, _super);

      v1.prototype.handlerUrl = function(element, handlerName, suffix, query, thirdparty) {
        var uri;
        uri = URI(this.handlerPrefix).segment($(element).data('usage-id')).segment('handler').segment(handlerName);
        if (suffix != null) {
          uri.segment(suffix);
        }
        if (query != null) {
          uri.search(query);
        }
        return uri.toString();
      };

      function v1() {
        v1.__super__.constructor.call(this);
        this.dispatcher = _.clone(Backbone.Events);
        this.listenTo('save', this._handleSave);
        this.listenTo('cancel', this._handleCancel);
        this.listenTo('error', this._handleError);
        this.listenTo('modal-shown', function(data) {
          return this.modal = data;
        });
        this.listenTo('modal-hidden', function() {
          return this.modal = null;
        });
        this.listenTo('page-shown', function(data) {
          return this.page = data;
        });
      }

      v1.prototype.notify = function(name, data) {
        return this.dispatcher.trigger(name, data);
      };

      v1.prototype.listenTo = function(name, callback) {
        return this.dispatcher.bind(name, callback, this);
      };

      v1.prototype.refreshXBlock = function(element) {
        if (this.page) {
          return this.page.refreshXBlock(element);
        }
      };

      v1.prototype._handleError = function(data) {
        var message, title;
        message = data.message || data.msg;
        if (message) {
          title = data.title || gettext("OpenAssessment Save Error");
          this.alert = new NotificationView.Error({
            title: title,
            message: message,
            closeIcon: false,
            shown: false
          });
          return this.alert.show();
        }
      };

      v1.prototype._handleSave = function(data) {
        var message;
        if (data.state === 'start') {
          message = data.message || gettext('Saving&hellip;');
          this.notification = new NotificationView.Mini({
            title: message
          });
          return this.notification.show();
        } else if (data.state === 'end') {
          this._hideAlerts();
          if (this.modal && this.modal.onSave) {
            this.modal.onSave();
          } else if (data.element) {
            this.refreshXBlock(data.element);
          }
          return this.notification.hide();
        }
      };

      v1.prototype._handleCancel = function() {
        this._hideAlerts();
        if (this.modal) {
          this.modal.cancel();
          return this.notify('modal-hidden');
        }
      };

      v1.prototype._hideAlerts = function() {
        if (this.alert && this.alert.options.shown) {
          return this.alert.hide();
        }
      };

      return v1;

    })(XBlock.Runtime.v1);
    this.PreviewRuntime = {};
    PreviewRuntime.v1 = (function(_super) {

      __extends(v1, _super);

      function v1() {
        return v1.__super__.constructor.apply(this, arguments);
      }

      v1.prototype.handlerPrefix = '/preview/xblock';

      return v1;

    })(BaseRuntime.v1);
    this.StudioRuntime = {};
    return StudioRuntime.v1 = (function(_super) {

      __extends(v1, _super);

      function v1() {
        return v1.__super__.constructor.apply(this, arguments);
      }

      v1.prototype.handlerPrefix = '/xblock';

      return v1;

    })(BaseRuntime.v1);
  });

}).call(this);
