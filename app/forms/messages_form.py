from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Messages


class NewMessage(FlaskForm):
    body = StringField('body', validators=[DataRequired()])
    recipientId = IntegerField('recipientId', validators=[DataRequired()])
    submit = SubmitField()